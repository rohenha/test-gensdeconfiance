import random
import time
from pathlib import Path
# from flask_cors import CORS

from flask import Flask, request, abort

app = Flask(__name__)

VALID_EMAILS = set(
    ["nicolas@gensdeconfiance.com", "celine@gensdeconfiance.com", "kevin@gensdeconfiance.com", "celinedion@gmail.com"]
)
TIMEOUT_PROBABILITY = 0.3
INTERNAL_ERROR_PROBABILITY = 0.1


@app.route("/", methods=["GET"])
def has_member():
    is_hard_mode = Path("make_it_more_difficult").exists()
    email = request.args.get("email")

    if not email:
        abort(400)

    if is_hard_mode:
        if random.random() < TIMEOUT_PROBABILITY:
            time.sleep(10)
        if random.random() < INTERNAL_ERROR_PROBABILITY:
            raise ValueError("Fake internal error")

    return {"exists": email in VALID_EMAILS}
