let firstHalfHTML = `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
        <title>Employee Page</title>
    </head>
    
    <body>
        <header class="p-3 text-center text-white bg-primary">
            <h1>Employees</h1>
        </header>
        <div class="container text-center">
            <div class="row">`

const lastHalfHTML = `        </div>
    </div>
</body>

</html>`

module.exports = { firstHalfHTML, lastHalfHTML };