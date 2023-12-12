import time

start_time = time.time()

powers = {}
vals = {}

for i in range(1, 201):
    powers[i] = i**5
    vals[i**5] = i

for a in range(1, 201):
    for b in range(a+1, 201):
        for c in range(b+1, 201):
            for d in range(c+1, 201):
                if powers[a] + powers[b] + powers[c] + powers[d] in vals:
                    print(a, b, c, d, vals[powers[a] + powers[b] + powers[c] + powers[d]])
                    break


end_time = time.time()
print(end_time-start_time)
