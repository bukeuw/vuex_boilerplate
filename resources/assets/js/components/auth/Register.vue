<template>
    <div class="panel panel-default col-md-8 col-md-offset-2">
        <div class="panel-heading">
            <h3 class="panel-title">Register</h3>
        </div>
        <div class="panel-body">
            <form class="form-horizontal" role="form" @submit.prevent="submit">
                <div class="form-group" v-bind:class="{ 'has-error': errors.name }">
                    <label class="control-label col-md-4" for="username">Username</label>

                    <div class="col-md-6">
                        <input class="form-control" id="username" type="text" v-model="name" autofocus />

                        <span class="help-block" v-if="errors.name">
                            {{ errors.name[0] }}
                        </span>
                    </div>
                </div>

                <div class="form-group" v-bind:class="{ 'has-error': errors.email }">
                    <label class="control-label col-md-4" for="email">Email</label>

                    <div class="col-md-6">
                        <input class="form-control" id="email" type="email" v-model="email" />

                        <span class="help-block" v-if="errors.email">
                            {{ errors.email[0] }}
                        </span>
                    </div>
                </div>

                <div class="form-group" v-bind:class="{ 'has-error': errors.password }">
                    <label class="control-label col-md-4" for="password">Password</label>

                    <div class="col-md-6">
                        <input class="form-control" id="password" type="password" v-model="password" />

                        <span class="help-block" v-if="errors.password">
                            {{ errors.password[0] }}
                        </span>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-6 col-md-offset-4">
                        <button class="btn btn-primary" type="submit">Register</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data () {
            return {
                name: null,
                email: null,
                password: null,
                errors: []
            };
        },

        methods: {
            ...mapActions({
                register: 'register'
            }),
            submit () {
                this.register({
                    payload: {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    },
                    context: this
                }).then(() => {
                    this.$router.replace({ name: 'home' });
                });
            }
        }
    }
</script>

