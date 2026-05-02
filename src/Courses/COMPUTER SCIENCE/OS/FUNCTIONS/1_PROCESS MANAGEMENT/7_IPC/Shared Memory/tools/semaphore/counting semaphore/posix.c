#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>

sem_t S;

void* worker(void* arg) {
    sem_wait(&S);   // wait()

    printf("Thread %ld entered critical section\n", (long)arg);
    sleep(2); // simulate work

    printf("Thread %ld leaving\n", (long)arg);

    sem_post(&S);   // signal()

    return NULL;
}

int main() {
    pthread_t t[5];

    // initialize counting semaphore with value 3
    sem_init(&S, 0, 3);

    for (long i = 0; i < 5; i++) {
        pthread_create(&t[i], NULL, worker, (void*)i);
    }

    for (int i = 0; i < 5; i++) {
        pthread_join(t[i], NULL);
    }

    sem_destroy(&S);

    return 0;
}