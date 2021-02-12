<template>
    <div>
        <div class="container mt-5" v-if="customer.id">
            <Alert v-if="successMessage" :successMessage="successMessage"/>
            <h1 class="page-header">Edit Customer</h1>
            <hr>

            <div>
                <form @submit.prevent="updatedCustomer">
                    <div class="card card-body rounded mt-5">
                        <h1>Customer Name</h1>
                        <div class="form-group mt-2">
                            <label for="first_name">First Name</label>
                            <input type="text" class="form-control" id="first_name" placeholder="First Name" v-model="customer.first_name">
                        </div>
                        <div class="form-group mt-2">
                            <label for="last_name">Last Name</label>
                            <input type="text" class="form-control" id="last_name" placeholder="Last Name" v-model="customer.last_name">
                        </div>
                    </div>
                    <div class="card card-body rounded mt-5">
                        <h1>Customer Contact</h1>
                        <div class="form-group mt-2">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Email" v-model="customer.email">
                        </div>
                        <div class="form-group mt-2">
                            <label for="phone">Phone</label>
                            <input type="tel" class="form-control" id="phone" placeholder="Phone" pattern="[0-9]{2}-[0-9]{2}-[0-9]{3}-[0-9]{4}" v-model="customer.phone">
                        </div>
                    </div>
                    <div class="card card-body rounded mt-5">
                        <h1>Customer Location</h1>
                        <div class="form-group mt-2">
                            <label for="address">Address</label>
                            <input type="text" class="form-control" id="address" placeholder="Address" v-model="customer.address">
                        </div>
                        <div class="form-group mt-2">
                            <label for="city">City</label>
                            <input type="text" class="form-control" id="city" placeholder="City" v-model="customer.city">
                        </div>
                        <div class="form-group mt-2">
                            <label for="state">State</label>
                            <input type="text" class="form-control" id="state" placeholder="State" v-model="customer.state">
                        </div>
                    </div>
                    <button class="btn btn-primary mt-3" type="submit">Updated</button>
                </form>
            </div>
        </div>
        <div class="container mt-5" v-else>
            <h1>Not Found!</h1>
        </div>
    </div>
</template>

<script>
import Alert from './Alert.vue';
export default {
    name: 'EditCustomer',
    components: {
        Alert
    },
    data() {
        return {
            customer: {},
            id: this.$route.params.id,
            successMessage: ''
        }
    },
    methods: {
        updatedCustomer() {
            if(!this.customer.first_name || !this.customer.last_name || !this.customer.email || !this.customer.phone || !this.customer.address || !this.customer.city || !this.customer.state)
            {
                this.successMessage = "Please fill in all required fields.";
            }
            else
            {
                this.$http.put('http://slimapp.test/api/customer/update/'+ this.customer.id, this.customer)
                            .then(() => {
                                this.$router.push({path: '/' , query: {'successMessage': 'Customer Updated'} });
                            });
            }
        },
        getCustomer() {
            this.$http.get('http://slimapp.test/api/customer/'+this.id)
                        .then((response) => {
                            this.setCustomer(response.data);
                        });
        },
        setCustomer(customer) {
            this.customer = customer;
        }
    },
    created() {
        this.getCustomer();
    }
}
</script>

<style>

</style>