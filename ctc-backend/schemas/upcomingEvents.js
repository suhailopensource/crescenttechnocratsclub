import { DefaultDocument, defineType } from "sanity";


export default defineType({
    name: 'upcomingEvent',
    title: 'Upcoming Event',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true, // Allows selecting a focal point in the image
            },
        },
    ],
})