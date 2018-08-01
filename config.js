module.exports = {
    PORT: process.env.CLIENT_ORIGIN || 8080,
    CLIENT_ORIGIN:process.env.CLIENT_ORIGIN || 'http://localhost:3000',
    DATABASE_URL:
    process.env.DATABASE_URL || 'mongodb://localhost:27017/video-chat',
    TEST_DATABASE_URL:
    process.env.TEST_DATABASE_URL ||'mongodb://localhost/video-chat-test',
    JWT_SECERT: process.env.JWT_SECERT,
    JWT_EXPIRY: process.env.JWT_EXPIRY || '7d'
}