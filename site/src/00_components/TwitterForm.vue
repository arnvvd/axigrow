<template>
	<form @submit.prevent="onSubmit">
		<input type="text" placeholder="Ton pseudo" v-model="username">
	</form>
</template>

<script>

    /* Import */
    import axios from 'axios';

    export default {

    	data() {
    		return {
    			username: '',
                error: false
    		}
    	},

        methods: {
            onSubmit (e) {
            	// Validation
		        if (!this.username.match(/\w{1,}\s{0,}/)) {
	          		this.error = true
		        } else {
	          		this.error = false
                    this.getTwitterProfile();
		        }
            },

            getTwitterProfile() {

                axios.get(`http://localhost:3000/api/twitter/${this.username}`)
                    .then( (response) => {
                        let twitterProfile = response.data[0];

                        let profile = {};

                        profile.id = twitterProfile.id;
                        profile.pseudonyme = twitterProfile.screen_name;
                        profile.name = twitterProfile.name;
                        profile.followers = twitterProfile.followers_count;
                        profile.following = twitterProfile.friends_count;
                        profile.likes = twitterProfile.favourites_count;
                        profile.location = twitterProfile.location;
                        profile.account_created_at = twitterProfile.created_at;


                        // Create User
                        this.createUser(profile);
                        // Create Shape
                        this.createShape(profile);
                    })
                    .catch( (error) => {
                        this.error = true;
                        console.log(error);
                    });
            },



            createUser(user) {
                this.$store.dispatch('createUser', user);
            },

            createShape(user) {

                let shape = {};

                shape.followers = user.followers;
                shape.following = user.following;
                shape.likes = user.likes;
                shape.userID = user.id;
                shape.author = user.pseudonyme;

                this.$store.dispatch('createShape', shape);
            },

			resetAllTimeProperties () {
				this.username = ''
			}
        }
    }
</script>
