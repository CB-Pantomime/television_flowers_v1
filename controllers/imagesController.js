
// bring in Cloudinary
const { cloudinary } = require('../utils/cloudinary');

const getFlowers = async (req, res) => {

    try {
        const { resources } = await cloudinary.search
            .expression('folder:television_flowers')
            .sort_by('created_at', 'desc')
            .max_results(64)
            .execute()
        
        const publicId = resources.map((file) => file.public_id);
        
        console.log('success get');
        console.log(publicId);
        res.send(publicId);

    } catch {
        console.log(`This is a GET error: ${err}` + err);
        res.status(500).json({ msg: 'Something went wrong' });
    }
};

module.exports = {
    getFlowers
}