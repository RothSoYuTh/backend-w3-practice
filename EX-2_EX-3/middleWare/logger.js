function logger(req, res, next) {
    const timestamp = new Date().toISOString();
    const method    = req.method;
    const path      = req.path;
    const query     = Object.keys(req.query).length > 0 ? req.query : '(none)';
 
    console.log(`[${timestamp}] ${method} ${path} | Query: ${JSON.stringify(query)}`);
    next();
}
 
export default logger;