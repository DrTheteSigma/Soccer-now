/**
 * These methods check if a provided id is a valid mongoose ObjectId as the 
 * built-in method is not good enough. https://stackoverflow.com/a/29231016/12745015
 * 
 * First method should be used for all models except User 
 * Second method should be used for User models only, of course.
 * (users objectid were changed to be a string instead of the default ObjectId type due to firebase generating userIDs as strings)
*/

const { Types: { ObjectId } } = require("mongoose");

exports.isObjectIdValid = (id) => {
    return (ObjectId.isValid(id) && String(new ObjectId(id)) === id);
};

exports.isUserObjectIdValid = (id) => {
    return (id && typeof id === "string");
};
