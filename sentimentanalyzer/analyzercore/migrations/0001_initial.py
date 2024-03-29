# Generated by Django 3.0.2 on 2020-01-21 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ChatBlob',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('source', models.CharField(default='', max_length=5000000)),
                ('runtimestamp', models.DateTimeField(auto_now_add=True)),
                ('negative', models.FloatField(default=0.0)),
                ('positive', models.FloatField(default=0.0)),
                ('neutral', models.FloatField(default=0.0)),
                ('compound', models.FloatField(default=0.0)),
            ],
        ),
    ]
