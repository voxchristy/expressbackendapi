const Bootcamp = require('../models/Bootcamp');

// @desc        Get all Bootcamps
// @route       GET api/v1/bootcamps
// @access      Public

exports.getBootcamps = async (req, res, next) => 
{
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({success: true, count: bootcamps.length,  data: bootcamps});
        
    } catch (error) {
        res.status(400).json({success: false, data: error.message});
    }
}

// @desc        Get single Bootcamp
// @route       GET api/v1/bootcamps/:id
// @access      Public

exports.getBootcamp = async (req, res, next) => 
{
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if(!bootcamp)
        {
            return res.status(404).json({success: false, data: `Requested resource not found ${req.params.id}`});
        }
        res.status(200).json({success: true, data: bootcamp});
        
    } catch (error) {
        res.status(400).json({success: false, data: error.message});
    }
}

// @desc        Create new Bootcamp
// @route       POST api/v1/bootcamps
// @access      Private

exports.createBootcamp = async (req, res, next) => 
{
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success: true,
            data: bootcamp
            });
        
    } catch (error) {
        res.status(400).json({ success: false, data: error.message });
    }
}

// @desc        Update Bootcamp
// @route       PUT api/v1/bootcamps/:id
// @access      Private

exports.updateBootcamp = async (req, res, next) => 
{
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
    
        if(!bootcamp){
            return res.status(404).json({success: false, data: `Requested resource not found ${req.params.id}`});
        }
    
        res.status(200).json({success: true, data: bootcamp});
        
    } catch (error) {
        res.status(400).json({success: false, data: error.message});
    }
}

// @desc        Delete Bootcamp
// @route       DELETE api/v1/bootcamps/:id
// @access      Private

exports.deleteBootcamp = async (req, res, next) => 
{
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    
        if(!bootcamp){
            return res.status(404).json({success: false, data: `Requested resource not found ${req.params.id}`});
        }
    
        res.status(200).json({success: true, data: {}});
    } catch (error) {
        
    }
}