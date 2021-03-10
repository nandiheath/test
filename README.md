# Test Repo

## Test GRPC

grpcurl -import-path . -grpc test.grpc --plaintext localhost:8081 WelcomeService/greetUser
