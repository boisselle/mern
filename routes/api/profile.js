const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator/check');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route   GET api/profile/me
// @desc    Get current user's profile
// @access  Private

router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);

        if(!profile) {
            return res.status(400).json({msg: 'There is no profile for this user'});
        }

        res.json(profile);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   POST api/profile
// @desc    Create or update a user profile
// @access  Private
router.post(
    '/',   
    [
        auth, 
        [
        check('status', 'Status is required')
            .not()
            .isEmpty(),
        check('skills', 'Skills is required')
            .not()
            .isEmpty()
        ]
    ],
    async (req, res) => {
        const error = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {
            company,
            website,
            location,
            bio,
            status,
            githubusername,
            skills,
            youtube,
            facebook,
            twitter,
            instagram,
            linkedin
        } = req.body;

        // Build profile object
        const profileFields = {};
        profileFields.user = req.user.id;
        if(company) profilesFields.company = company;
        if(website) profilesFields.website = website;
        if(location) profilesFields.location = location;
        if(bio) profilesFields.bio = bio;
        if(status) profilesFields.status = status;
        if(githubusername) profilesFields.githubusername = githubusername;
        if(skills) {
            profileFields.skills = skills.split(',').map(skill => skill.trim());
        }

        console.log(skills);

        res.send('Hello');
    }
);
module.exports = router;