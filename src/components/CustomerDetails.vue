<template>
    <div>
        <div class="container details mt-5" v-if="customer.id">
            <router-link to="/">Back</router-link>
            <div class="page-header d-flex align-items-center justify-content-between">
                <h1>{{ customer.first_name }} {{ customer.last_name }}</h1>
                <div>
                    <router-link :to="'/edit-customer/'+customer.id" class="btn btn-warning">Edit</router-link>
                    <button class="btn btn-danger" style="margin-left: 5px;" @click="deleteCustomer(customer.id)">Delete</button>
                </div>
            </div>
            
            <ul class="list-group">
                <li class="list-group-item"><i class="bi bi-phone"></i> {{ customer.phone }}</li>
                <li class="list-group-item"><i class="bi bi-envelope-fill"></i> {{ customer.email }}</li>

                <ul class="list-group mt-3">
                    <li class="list-group-item">{{ customer.address }}</li>
                    <li class="list-group-item">{{ customer.city }}</li>
                    <li class="list-group-item">{{ customer.state }}</li>
                </ul>
            </ul>
        </div>
        <div class="container details mt-5" v-else>
            <router-link to="/">Back</router-link>
            <h1 class="page-header">Not Found!</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CustomerDetails',
        data() {
            return {
                id: this.$route.params.id,
                customer: {}
            }
        },
        created() {
            this.$http.get('http://slimapp.test/api/customer/' + this.id)
                .then(response => {
                    this.customer = response.body;
                });
        },
        methods: {
            deleteCustomer(id)
            {
                this.$http.delete('http://slimapp.test/api/customer/delete/'+ id)
                            .then(() => {
                                this.$router.push({path: '/' , query: {'successMessage': 'Customer Deleted'} });
                            });
            }
        }
    }
</script>

<style>

</style>