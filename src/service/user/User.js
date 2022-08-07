import axios from "../../axios";

class User{

    postUser = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('users', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });
        return await promise;
        
        };


        GetUser = async () => {
            const promise = new Promise((resolve, reject) => {
                axios.get('users')
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        }


     

        

}

export default new User();