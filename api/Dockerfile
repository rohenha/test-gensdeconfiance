FROM python:3
ADD . /code
WORKDIR /code
RUN pip install -r requirements.txt && pip install flask-cors --upgrade
CMD python -m flask run --host=0.0.0.0
