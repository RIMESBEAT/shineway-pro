/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
         
          },
        ],
      },
      env: {
        DATABASE_URL:"mongodb+srv://shineway:shine32teeth@cluster0.7mqmnow.mongodb.net/shinedb?retryWrites=true&w=majority",

        CLOUD_NAME:"ded92puxl",

        API_KEY:'681197325756768',

        API_SECRET:'KHeVMRqBTL24wLupvEq9twbH3FU',

        BASE_URL:"http://localhost:3000",
        
        NEXT_PUBLIC_SANITY_PROJECT_ID:"n3y3hi0j",

        NEXT_PUBLIC_SANITY_DATASET:"production",
      },
}

module.exports = nextConfig
