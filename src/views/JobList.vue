<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      jobs: {},
      keyWords: null,
      location: null,
      apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
    };
  },
  computed: {
    ...mapState(['jobList', 'total', 'hasNextPage', 'currentPage', 'limit']),
  },
  created() {
    this.fetchJobs();
  },
  methods: {
    fetchJobs() {
      this.$store.dispatch('fetchJobs');
    },
    fetchNextPage() {
      if (this.hasNextPage) {
        this.$store.commit('SET_CURRENT_PAGE', this.currentPage + 1);
        this.fetchJobs();
      } else {
        this.$store.commit('SET_CURRENT_PAGE', this.currentPage - 1);
      }
    },
    searchJob() {
      const url = `${this.apiBaseUrl}?` + `_page=${this.currentPage}&_limit=${this.limit}`  + (this.location ? `&cityName=${this.location}` : '') + (this.keyWords ? `&q=${this.keyWords}` : '');
      axios.get(url)
        .then(response => {
          this.$store.state.jobList = response.data;
          this.$store.state.total = response.headers["x-total-count"]
          this.$store.state.hasNextPage = this.total > this.currentPage * this.limit;
        })
        .catch(error => {
          alert('Error fetching post:', error);
        });
    }
  },
  watch: {
    currentPage: function() {
      this.fetchJobs();
    }
  }
}

</script>
<template>
  <div class="about">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-navbar>
            <b-nav-form>
              <b-form-input class="mr-sm-2" v-model="keyWords" placeholder="Anahtar Kelime"></b-form-input>
              <b-form-input class="mr-sm-2" v-model="location" placeholder="Lokasyon"></b-form-input>
              <b-button variant="outline-success" class="my-2 my-sm-0" @click="searchJob" type="button">İş Ara</b-button>
            </b-nav-form>
          </b-navbar>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div cols="12" md="8" class="jobCard">
            <b-card v-for="job in jobList" :key="job.id" >
              <b-card-title>
                {{ job.companyName }}
              </b-card-title>
              <b-card-text>
                {{ job.positionName }}
              </b-card-text>
              <b-card-text>
                {{ job.durationDayText }}
              </b-card-text>
              <b-card-text>
                {{ job.townName }}
              </b-card-text>
              <b-button>
                <router-link class="custom-link" :to="`/jobDetails/${job.id}`">İlan Detayı</router-link>
              </b-button>
            </b-card>
          </div>
        </b-col>
        <b-col cols="6" md="4">
          <b-card
              title="Kariyer.net"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Kariyerize En Uygun Fırsatları Bulmak İçin Takipte Kalın
              </b-card-text>

              <b-button href="#" variant="primary">Takip Et</b-button>
            </b-card>
        </b-col>
      </b-row>
      <b-pagination
      v-model="currentPage"
      :total-rows="total"
      :per-page="limit"
      @click.native="fetchNextPage"
      class="custom-pagination"
    ></b-pagination>
    </b-container>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    margin-top: 25px;
  }
  .jobCard {
    margin: 5px;
  }
  .card {
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid cornflowerblue;
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  .card:hover {
    background-color: lightblue;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .custom-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .custom-pagination .page-item {
    margin: 0.3rem;
    font-size: 1.1rem;
    transition: background-color 0.3s ease;
  }
  .custom-pagination .page-item:not(.active):hover {
    background-color: #f0f0f0;
    border-color: #f0f0f0;
  }
  .custom-pagination .page-item.active {
    background-color: #007bff;
    border-color: #007bff;
  }
  .custom-pagination .page-link {
    color: #007bff;
    border: none;
    background-color: transparent;
  }
  .custom-pagination .page-link:hover {
    color: #0056b3;
    text-decoration: underline;
  }
  .custom-pagination .page-item.disabled .page-link {
    color: #aaa;
    pointer-events: none;
  }
  .custom-link {
    color: #232324;
    text-decoration: none;
  }
  .custom-link:hover {
    color: #ecf0f3;
  }
}
</style>
