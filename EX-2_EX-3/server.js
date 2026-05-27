// server.js
import express from 'express';
import courses from "./course.js";
import logger from './middleWare/logger.js';
import auth from './middleWare/Auth.js';
import validateQuery from './middleWare/validateQuery.js';

const app = express();
const PORT = 3000;

// Route: GET /departments/:dept/courses

app.get('/departments/:dept/courses', logger, validateQuery, auth, (req, res) => {
    const { dept } = req.params;
    const { level, minCredits, maxCredits, semester, instructor } = req.query;
    // Implementing the filter logic
    // Hint: Use the filter method to filter the courses array based on the provided criteria


    let results = courses.filter(course =>{
        return(
            course.department === dept &&
            (!level || course.level === level) &&
            (!maxCredits || course.credits <= Number(maxCredits)) &&
            (!minCredits|| course.credits >= Number(minCredits)) &&
            (!semester || course.semester === semester) &&
            (!instructor || course.instructor.toLowerCase().includes(instructor.toLowerCase()))
        )
    });

    if(results.length === 0){
        return(
            res.status(404).json({
            message: 'No matching courses found',
     }))
    };

    res.status(200).json({
        results,
        meta : {
            total : results.length
        }
    })


});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
