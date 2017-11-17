<template>
	<div class="generator__form">
		<input class="input--name" type="text" placeholder="@Username twitter" v-model="username">
        <div class="submit__buttons">
            <button @click="onSubmit(0)" class="input--submit input--submit-01">Generate your shape</button>
            <button @click="onSubmit(1)" class="input--submit input--submit-02">Print your shape*</button>
        </div>
        <p class="generator__form__advice">*Si vous êtes participant à l’événement <span class="underline">GROW</span>, imprimez votre forme sur l’Axidraw</p>
	</div>
</template>

<script>

    /* Import */
    import axios from 'axios';
    import moment from 'moment';

    export default {

    	data() {
    		return {
    			username: '',
                error: false
            }
    	},

        methods: {
            onSubmit(type, e) {
            	// Validation
		        if (!this.username.match(/\w{1,}\s{0,}/)) {
	          		this.error = true
		        } else {
	          		this.error = false
                    this.getTwitterProfile(type);
                    this.resetAllTimeProperties();
		        }
            },

            getTwitterProfile(type) {

                axios.get(`http://localhost:3000/api/twitter/${this.username}`)
                    .then( (response) => {
                        let twitterProfile = response.data[0];

                        let profile = {};

                        var tweetDate = twitterProfile.created_at;
                        let createDate = moment(tweetDate, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').toDate();
                        let nowDate = moment().toDate();
                        let daysCount = moment(nowDate).diff(createDate, 'days')

                        profile.id = twitterProfile.id;
                        profile.pseudonyme = twitterProfile.screen_name;
                        profile.name = twitterProfile.name;
                        profile.followers = twitterProfile.followers_count;
                        profile.following = twitterProfile.friends_count;
                        profile.tweets = twitterProfile.statuses_count;
                        profile.likes = twitterProfile.favourites_count;
                        profile.location = twitterProfile.location;
                        profile.account_created_at = twitterProfile.created_at;
                        profile.daysCount = daysCount;


                        // Create User
                        this.createUser(profile);
                        // Create Shape
                        this.createShape(profile, type);
                    })
                    .catch( (error) => {
                        console.log("coucou erreur");
                        this.error = true;
                        console.log(error);
                    });
            },

            createUser(user) {
                this.$store.dispatch('createUser', user);
            },

            createShape(user, type) {

                let shape = {};

                shape.followers = user.followers;
                shape.following = user.following;
                shape.tweets = user.tweets;
                shape.likes = user.likes;
                shape.userID = user.id;
                shape.author = user.pseudonyme;
                shape.daysCount = user.daysCount;
                shape.isDraw = false;
                shape.drawStatus = 0;

                if (type === 0) {
                    shape.toDraw = false;
                } else {
                    shape.toDraw = true;
                }

                this.$store.dispatch('createShape', shape);
            },

			resetAllTimeProperties() {
				this.username = ''
			}
        }
    }
</script>
