FROM python:3.6
RUN apt-get -q update && apt-get install -y -q \
  sqlite3 --no-install-recommends \
  && apt-get clean && rm -rf /var/lib/apt/lists/*
ENV LANG C.UTF-8
RUN mkdir /app
WORKDIR /app
ADD requirements.txt /app/requirements.txt
RUN pip install -r /app/requirements.txt
ADD . /app
CMD gunicorn -b :8084 sentimentanalyzer.wsgi