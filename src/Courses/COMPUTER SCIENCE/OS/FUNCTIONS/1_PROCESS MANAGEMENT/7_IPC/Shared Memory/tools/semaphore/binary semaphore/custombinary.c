#include <stdio.h>
#include <pthread.h>
#include <unistd.h>

typedef struct {
    int value; // 0 or 1
} binary_semaphore;

binary_semaphore mutex = {1};

void wait(binary_semaphore *s) {
    while (s->value == 0); // busy wait (bad but educational)

    s->value = 0;
}

void signal(binary_semaphore *s) {
    s->value = 1;
}

void* critical_section(void* arg) {
    int id = *(int*)arg;

    wait(&mutex);

    printf("Thread %d entered critical section\n", id);
    sleep(2);
    printf("Thread %d leaving critical section\n", id);

    signal(&mutex);

    return NULL;
}

int main() {
    pthread_t t1, t2;
    int a = 1, b = 2;

    pthread_create(&t1, NULL, critical_section, &a);
    pthread_create(&t2, NULL, critical_section, &b);

    pthread_join(t1, NULL);
    pthread_join(t2, NULL);

    return 0;
}