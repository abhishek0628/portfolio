#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>

sem_t mutex;  // binary semaphore

void* critical_section(void* arg) {
    int id = *(int*)arg;

    sem_wait(&mutex);   // wait (lock)

    printf("Process %d entered critical section\n", id);
    sleep(2); // simulate work
    printf("Process %d leaving critical section\n", id);

    sem_post(&mutex);   // signal (unlock)

    return NULL;
}

int main() {
    pthread_t t1, t2;
    int a = 1, b = 2;

    sem_init(&mutex, 0, 1); // binary semaphore initialized to 1

    pthread_create(&t1, NULL, critical_section, &a);
    pthread_create(&t2, NULL, critical_section, &b);

    pthread_join(t1, NULL);
    pthread_join(t2, NULL);

    sem_destroy(&mutex);

    return 0;
}