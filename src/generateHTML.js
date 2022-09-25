const generateHTML = () =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Team Profile</title>
    </head>
    <body>
        <header>
            <nav class="navbar bg-dark" id="navbar">
                <h1 class="h1 w-100 text-center text-light p-4" id="navbar-text">Team Profile</h1>
            </nav>
        </header>
    
        <main>
            <div class="jumbotron jumbotron-fluid">
                <div class="row justify-content-center mx-5">
                    <div class="card col-3 text-bg-secondary">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                        <h5 class="card-title">Secondary card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
    
                    <div class="card col-3 text-bg-secondary mx-5">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                        <h5 class="card-title">Secondary card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
    
                    <div class="card col-3 text-bg-secondary">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                        <h5 class="card-title">Secondary card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div> 
            </div>
        </main>
    </body>
    </html>`;

module.exports = generateHTML;    