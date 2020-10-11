# Feature toggle management app

Application written for an interview. It took about ~10h to write and therefore it isn't a complete solution.

Some missing features:
1. Production build that produces one jar which also serves js app
2. Adding customer only from predefined set
3. Security
4. Other blows and whistles

## Used technologies:
#### Database
1. H2 Database
2. Flyway as a db migration tool
#### Backend
1. Spring BOOT with all the goodies
2. MyBatis for db connection
3. Swagger for API documentation
#### Frontend
1. Angular 10 (with CLI tools)
2. Bootstrap and Font Awesome for styling
#### Version control
GIT
#### IDE
IntelliJ

## How to start
1. Install H2 and create new database using credentials in application.yml
2. Run H2 database
3. Run flyway:migrate command either from Intellij or command line
4. Install and run Spring BOOT application, Swagger UI will available at [http://localhost:8080/swagger-ui.html]()
5. Run 'ng serve' command from ***frontend*** directory
6. Frontend will be available at [http://localhost:4200/]()

## What it does

Allows you to create, edit and archive feature toggles. Feature toggle is considered active if there is a customer assigned to it.
Archiving means simply removing all customers.

There is additional API that retrieves list of feature toggles for customer. Sample request:
```
{
  "customerId": "6",
  "names": [
    "toggle-1",
    "toggle-2",
    "toggle-3"
  ]
}
```
Will return list with these 3 toggles and information if they are active for customer, expired or inverted.
