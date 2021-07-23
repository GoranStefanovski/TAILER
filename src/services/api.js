import axios from 'axios'

const http = axios.create()

export default {
    async getMedia() {
        const media = await http.get('http://tailer.test/wp-json/wp/v2/media')
        const mappedMedia = media.data.map((mediaItem) => {
            const [category, idx] = mediaItem.title.rendered.split('-')
            return {
                url: mediaItem.guid.rendered,
                title: mediaItem.title.rendered,
                category,
                idx
            }
        })
        return mappedMedia
    }
}
