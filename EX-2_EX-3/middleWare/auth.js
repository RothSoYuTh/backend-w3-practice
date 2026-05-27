const VALID_TOKEN = 'abc121212';
 
function auth(req, res, next) {
    const { token } = req.query;
 
    if (!token) {
        return res.status(401).json({
            error: 'Unauthorized',
            message: "Missing required query parameter: 'token'.",
        });
    }
 
    if (token !== VALID_TOKEN) {
        return res.status(401).json({
            error: 'Unauthorized',
            message: 'Invalid token. Access denied.',
        });
    }
 
    next();
}
 
export default auth;