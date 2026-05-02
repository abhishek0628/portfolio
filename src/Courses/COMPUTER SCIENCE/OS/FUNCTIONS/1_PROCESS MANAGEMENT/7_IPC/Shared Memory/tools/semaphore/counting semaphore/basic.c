#include <stdio.h>
#include <pthread.h>

typedef struct {
    int value;
    pthread_mutex_t lock;
    pthread_cond_t cond;
} Semaphore;

// Initialize
void init(Semaphore *s, int init_value) {
    s->value = init_value;
    pthread_mutex_init(&s->lock, NULL);
    pthread_cond_init(&s->cond, NULL);
}

// wait() operation
void wait(Semaphore *s) {
    pthread_mutex_lock(&s->lock);

    while (s->value <= 0) {
        pthread_cond_wait(&s->cond, &s->lock);
    }

    s->value--;  // take one resource

    pthread_mutex_unlock(&s->lock);
}

// signal() operation
void signal(Semaphore *s) {
    pthread_mutex_lock(&s->lock);

    s->value++;   // release one resource

    pthread_cond_signal(&s->cond);

    pthread_mutex_unlock(&s->lock);
}