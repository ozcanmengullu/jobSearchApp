<script>
export default {
  name: 'JobComponent',
  props: {
    jobData: {
      type: Object,
      required: true
    }
  }
};
</script>

<template>
  <div class="job-container">
    <b-card>
      <b-img :src="jobData.imageUrl" fluid class="job-image" alt="Job Image"></b-img>
      <div class="job-details">
        <h4>{{ jobData.positionName }}</h4>
        <p>{{ jobData.companyName }}</p>
        <p>{{ jobData.durationDayText }}</p>
        <p>{{ jobData.distance }}</p>
        <p>{{ jobData.cityName }}, {{ jobData.townName }}</p>
      </div>
      <a href="^#" class="card-link">Başvur</a>
    </b-card>
  </div>
</template>


<style>
.job-container {
  max-width: 400px;
  margin: 7.5px auto;
}

.job-image {
  height: 200px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

.job-details {
  padding: 10px;
}
</style>
