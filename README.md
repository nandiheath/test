# Test Repo

## Test GRPC

grpcurl -import-path . -proto test.proto --plaintext localhost:8081 WelcomeService/greetUser
