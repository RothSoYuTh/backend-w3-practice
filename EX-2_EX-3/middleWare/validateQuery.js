

function validateQuery(req, res, next) {
    const { minCredits, maxCredits } = req.query;

   
    const isValidInteger = (value) => /^-?\d+$/.test(value);

    if (minCredits !== undefined && !isValidInteger(minCredits)) {
        return res.status(400).json({
            error: 'Bad Request',
            message: "'minCredits' must be a valid integer.",
        });
    }

    if (maxCredits !== undefined && !isValidInteger(maxCredits)) {
        return res.status(400).json({
            error: 'Bad Request',
            message: "'maxCredits' must be a valid integer.",
        });
    }

    if (minCredits !== undefined && maxCredits !== undefined) {
        if (parseInt(minCredits, 10) > parseInt(maxCredits, 10)) {
            return res.status(400).json({
                error: 'Bad Request',
                message: "'minCredits' cannot be greater than 'maxCredits'.",
            });
        }
    }

    next();
}

export default validateQuery;