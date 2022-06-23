var app = new Vue(
    {
        el: '#root',
        data: {
            socialPost: {
                "id": 5,
                "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
                "media": "https://unsplash.it/600/400?image=534",
                "author": {
                    "name": "Alessandro Sainato",
                    "image": "https://unsplash.it/300/300?image=29"
                },
                "likes": 95,
                "created": "03-05-2021",
                "likeButtonClass": 'like-button',
                "isLiked": false
            }
        },
        methods: {
            manageLike() {
                if(!this.socialPost.isLiked) {
                    // Aggiungiamo all'elemento la classe like-button--liked
                    this.socialPost.likeButtonClass += ' like-button--liked';
                    // Si incrementa di 1 il numero di likes
                    this.socialPost.likes++;
                    this.socialPost.isLiked = true;
                } else {
                    this.socialPost.likeButtonClass = 'like-button';
                    this.socialPost.likes--;
                    this.socialPost.isLiked = false;
                }
            }
        }
    }
);