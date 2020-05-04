from django.db import models
from django.contrib.auth.models import User

class ChatBlob(models.Model):
    #user = models.ForeignKey(User,on_delete=models.CASCADE)
    source = models.CharField(max_length=5*10**6,default='')
    runtimestamp = models.DateTimeField(auto_now_add=True)
    negative = models.FloatField(default=0.0)
    positive = models.FloatField(default=0.0)
    neutral = models.FloatField(default=0.0)
    compound = models.FloatField(default=0.0)

