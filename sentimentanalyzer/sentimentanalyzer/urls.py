"""sentimentanalyzer URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from django.conf.urls import url, include
from rest_framework import routers, serializers, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from analyzercore.models import ChatBlob
analyser = SentimentIntensityAnalyzer()

def sentiment_analyzer_scores(sentence):
    score = analyser.polarity_scores(sentence)
    return "{:-<40} {}".format(sentence, str(score))
    
class ChatBlobSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ChatBlob
        fields = ['source','compound','negative','positive','neutral']

class ChatBlobViewSet(viewsets.ModelViewSet):
    queryset = ChatBlob.objects.all()
    serializer_class = ChatBlobSerializer

    @action(detail=False, methods=['post'])
    def analyze(self,request,pk=None):
        serializer = ChatBlobSerializer(data=request.data)
        if serializer.is_valid():
            feedback = sentiment_analyzer_scores(serializer.data['source'])
            return Response(feedback)


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'api/chat', ChatBlobViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]