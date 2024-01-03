import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId: '61qsncth',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-05-03',
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})


const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)

export default client

