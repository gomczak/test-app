
run app
```zsh
docker run --rm --name test-app-container \
  -p 3000:3000 \
  --env-file ./.env \
  --network test-app \
  test-app
```

run mongodb
```zsh
docker run --rm -d \
  --name mongodb \
  -p 27017:27017 \
  --env-file ./.env \
  --network test-app mongo
```

run both
```zsh
docker stop $(docker ps -a -q)
docker compose up --build 
```