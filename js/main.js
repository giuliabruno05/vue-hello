const { createApp} = Vue

createApp({
    data() {
        return {
            message:"Hello Vue",
            image:"img/vue.jpeg"
        }
    }
}) .mount("#title")

