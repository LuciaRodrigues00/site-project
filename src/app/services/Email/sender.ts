import axios from 'axios';

const sendEmail = async (name: string, email: string, phone: string, message: string) => {
    return axios({
        method: 'post',
        url: '/api/send-mail',
        data: {
            name: name,
            email: email,
            phone: phone,
            message: message,
        },
    });
};

export default sendEmail;