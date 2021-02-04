<template>
    <div class="container mt-5">
        <h1>Manage Customers</h1>
        <hr>
        <table class="table" v-if="customers.length > 0">
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers" :key="customer.id">
                    <th scope="row">{{ customer.first_name }}</th>
                    <td>{{ customer.last_name }}</td>
                    <td>{{ customer.email }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Customers',
        data() {
            return {
                customers: []
            }
        },
        methods: {
            getCustomers() {
                this.$http.get('http://slimapp.test/api/customers')
                            .then(response => {
                                this.customers = response.body;
                            });
            }
        },
        mounted() {
            this.getCustomers();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>