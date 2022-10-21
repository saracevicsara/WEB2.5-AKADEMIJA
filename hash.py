import hashlib
ulaz="sara saracevic"

hashh=hashlib.md5(ulaz.encode('utf-8')).hexdigest()
print(hashh)