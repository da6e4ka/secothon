import bottle
app = bottle.Bottle()

try:
    page = open("./tech-work.html", 'r', encoding='utf-8').read()
except Exception as err:
    page = "<!DOCTYPE html><html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <title>SECOTHON'2018</title> <meta name="viewport" content="width=device-width, initial-scale=1"> <style> * { line-height: 1.2; margin: 0; } html { color: #888; display: table; font-family: sans-serif; height: 100%; text-align: center; width: 100%; } body { display: table-cell; vertical-align: middle; margin: 2em auto; } h1 { color: #555; font-size: 2em; font-weight: 400; } p { margin: 0 auto; width: 280px; } @media only screen and (max-width: 280px) { body, p { width: 95%; } h1 { font-size: 1.5em; margin: 0 0 0.3em; } } </style></head><body> <h1>Проводятся технические работы</h1> <p>Извините за неудобства, скоро всё исправим</p></body></html>"

@app.route('/', method=['GET', 'POST'])
@app.route('/<path:path>', method=['GET', 'POST'])
def home_page(path=''):
    bottle.response.status = 521
    return page


if __name__ == '__main__':
    bottle.run(app, host="0.0.0.0", port='80')
