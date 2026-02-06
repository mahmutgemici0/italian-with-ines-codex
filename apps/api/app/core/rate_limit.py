import time
from collections import defaultdict, deque
from fastapi import HTTPException, Request

WINDOW_SECONDS = 60
MAX_REQUESTS = 20

request_log = defaultdict(deque)


def simple_rate_limit(request: Request) -> None:
    ip = request.client.host if request.client else "unknown"
    now = time.time()
    queue = request_log[ip]

    while queue and queue[0] < now - WINDOW_SECONDS:
        queue.popleft()

    if len(queue) >= MAX_REQUESTS:
        raise HTTPException(status_code=429, detail="Too many requests")

    queue.append(now)
