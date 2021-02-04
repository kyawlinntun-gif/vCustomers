<template>
    <div class="container mt-5">
        <h1>Add Customer</h1>

        <div>
            <form @submit.prevent="addCustomer">
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
                        <input type="tel" class="form-control" id="phone" placeholder="Phone" v-bind="customer.phone" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{3}" v-model="customer.phone">
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
                <button class="btn btn-primary mt-3" type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddCustomer',
    data() {
        return {
            customer: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                state: ''
            }
        }
    },
    methods: {
        addCustomer() {
            if(!this.customer.first_name || !this.customer.last_name || !this.customer.email || !this.customer.phone || !this.customer.address || !this.customer.city || !this.customer.state)
            {
                console.log("Please fill in all required fields.");
            }
            else
            {
                this.$http.post('http://slimapp.test/api/customer/add', this.customer)
                            .then(() => {
                                this.$router.push('/');
                            });
            }
        }
    }
}
</script>

<style>

</style>