
< !doctype html >
  <html lang="en">
    <head>
      <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Bootstrap By SKILLHUB</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
          </head>
          <body>

            <script>
              let tc = document.getElementById("tc")
              function toatify(type, msg) {
                let icon
              if (type == "bg-danger") {
                icon = `<i class="bi bi-x-diamond fs-4 me-2"></i>`
              }

              if (type == "bg-primary") {
                icon = `<i class="bi bi-gear-wide fs-4 me-2" > </i >`
              }


              let toast = document.createElement("div")
              toast.classList.add("toastify", "p-4", type)
              toast.innerHTML = icon + msg
              tc.appendChild(toast)
              setTimeout(function () {
                toast.remover()
              }, 5000)


        }
            </script>
          </body>
        </html>
