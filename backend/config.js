module.exports = {
    jwt: {
        secret: process.env.JWT_SECRET || '@S=#89y18hijkkm#MBkj',
        cookie: 'sid'
    },
    vk: {
        clientCode: 6886145,
        clientSecret: 'JyGjCbEkbMzYe2EGEwmc',
        // redirectURL: "http://secothon.secon.ru/vk",
        redirectURL: "http://localhost/vk",
    },
    timepad_secret: "leogotoscar",
    imageFileExtensions: [
        "png", "jpeg", "jpg", "svg", "gif", "ico"
    ]
};
