<template>
    <div class="container mt-5">
        <Alert v-if="successMessage" :successMessage="successMessage"/>
        <input type="text" class="form-control" v-model="search" placeholder="Enter Last Name">
        <h1 class="page-header">Manage Customers</h1>
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
                <tr v-for="customer in inputFilter(customers, search)" :key="customer.id">
                    <th scope="row">{{ customer.first_name }}</th>
                    <td>{{ customer.last_name }}</td>
                    <td>{{ customer.email }}</td>
                    <td><router-link class="btn btn-default" :to="'/customer-details/' + customer.id">View</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Alert from './Alert.vue';
    export default {
        name: 'Customers',
        components: {
            Alert
        },
        data() {
            return {
                customers: [],
                successMessage: '',
                search: ''
            }
        },
        methods: {
            getCustomers() {
                this.$http.get('http://slimapp.test/api/customers')
                            .then(response => {
                                this.customers = response.data;
                            });
            },
            inputFilter(lists, value)
            {
                value = value.charAt(0).toUpperCase() + value.slice(1); 
                return lists.filter(customer => {
                    return customer.last_name.indexOf(value) > -1;
                });
            }
        },
        created() {
            if(this.$route.query.successMessage)
            {
                this.successMessage = this.$route.query.successMessage;
            }
            this.getCustomers();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>