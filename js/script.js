console.log('vue ok', Vue)

const { createApp } = Vue

const endPoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

const app = createApp({
    data: () => ({
        mailList: []
    }),

    created() {
        for (let i = 0; i < 10; i++) {
            axios.get(endPoint).then(res => {

                this.mailList.push(res.data.response)
            })
        }

    }
});

app.mount('#root')