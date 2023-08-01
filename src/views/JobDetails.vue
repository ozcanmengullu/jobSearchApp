<script>
import axios from 'axios';
import JobComponent from '../components/Job.vue';

export default {
  components: {
    JobComponent
  },
  data() {
    return {
      post: {},
      currentPage: 1,
      limit: 5,
      hasNextPage: false,
      apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
      cardTitle: null
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      axios.get(`${this.apiBaseUrl}/${this.$route.params.id}`)
        .then(response => {
          this.post = response.data;
          this.cardTitle = response.data.companyName;
        })
        .catch(error => {
          alert('Error fetching post:', error);
        });
    },
  },
}

</script>
<template>
  <div class="about">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div cols="12" md="4">
            <job-component :job-data="post" />
            <b-card title="İş Tanımı" sub-title="">
              <b-card-text>
                {{ this.post.jobDescription }}
              </b-card-text>
            </b-card>
            <br>
          </div>
        </b-col>
        <b-col>
          <div cols="6" md="4">
            <b-card
              :title="cardTitle"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Yeni Fırsatar İçin Bu işvereni Takipte Kal
              </b-card-text>

              <b-button href="#" variant="primary">Takip Et</b-button>
            </b-card>
            <br>
            <b-card title="İletişim Bİlgileri">
              <b-card-text>
                {{ this.post.fullAddress }}
              </b-card-text>

              <b-card-text>
                {{ this.post.contactPhone }}
              </b-card-text>
            </b-card>
          </div>
        </b-col>
      </b-row>
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
  .card {
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid cornflowerblue;
  }
}
</style>
