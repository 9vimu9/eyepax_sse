## Installation steps

1. clone the code
    ```bash
    git clone https://github.com/9vimu9/eyepax_sse.git
    ```
2. start docker server(I used Docker throughout the development)
    ```bash
    ./vendor/bin/sail up -d
    ```
3. install JS Packages using NPM
    ```bash
    ./vendor/bin/sail npm install
    ```
4. install composer packages
    ```bash
    ./vendor/bin/sail composer install
    ```
   
5. clear cache and reconfigure cache
   ```bash
   ./vendor/bin/sail artisan optimize
    ```
   ```bash
   ./vendor/bin/sail clear:cache
    ```
6. start Vite watchdog.(for hot reload)
   ```bash
   ./vendor/bin/sail npm run dev
    ```
7. run migrations (in a new terminal)
   ```bash
   ./vendor/bin/sail artisan migrate
    ```

8. create admin user
   ```bash
   ./vendor/bin/sail artisan tinker
    ```
   ```bash
   User::factory()->create();
    ```

now application is ready. visit http://localhost/members

## important URLs

1. #### http://localhost/members
   list of members

2. #### http://localhost/members/create
   add new member

3. #### http://localhost/members/<member_id>/edit
   edit member


## Design Patterns,Architecture, Techniques Implemented
1. Repository pattern
2. Service Pattern
3. Data Transfer Objects using [Laravel-data](https://spatie.be/docs/laravel-data/v2/introduction) package
    1. for cleaner, Maintainable code
    2. to separate application logic from business logic
4. Dependency injection using service Providers
5. Dependency Inversion
6. SPA
    1. implemented SPA using vue router to reduce page loads
7. Vue composition API
    1. for cleaner and Maintainable code
8. [JSEND](https://github.com/omniti-labs/jsend) used as the JSON based format for application-level communication. 
