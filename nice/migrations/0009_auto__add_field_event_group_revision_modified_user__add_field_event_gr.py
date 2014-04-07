# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding field 'Event_Group_Revision.modified_user'
        db.add_column(u'nice_event_group_revision', 'modified_user',
                      self.gf('django.db.models.fields.related.ForeignKey')(default=1, to=orm['nice.User_Profile']),
                      keep_default=False)

        # Adding field 'Event_Group_Revision.modified_time'
        db.add_column(u'nice_event_group_revision', 'modified_time',
                      self.gf('django.db.models.fields.DateTimeField')(default=datetime.datetime(2014, 4, 7, 0, 0)),
                      keep_default=False)


    def backwards(self, orm):
        # Deleting field 'Event_Group_Revision.modified_user'
        db.delete_column(u'nice_event_group_revision', 'modified_user_id')

        # Deleting field 'Event_Group_Revision.modified_time'
        db.delete_column(u'nice_event_group_revision', 'modified_time')


    models = {
        u'auth.group': {
            'Meta': {'object_name': 'Group'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '80'}),
            'permissions': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['auth.Permission']", 'symmetrical': 'False', 'blank': 'True'})
        },
        u'auth.permission': {
            'Meta': {'ordering': "(u'content_type__app_label', u'content_type__model', u'codename')", 'unique_together': "((u'content_type', u'codename'),)", 'object_name': 'Permission'},
            'codename': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'content_type': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['contenttypes.ContentType']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '50'})
        },
        u'auth.user': {
            'Meta': {'object_name': 'User'},
            'date_joined': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'email': ('django.db.models.fields.EmailField', [], {'max_length': '75', 'blank': 'True'}),
            'first_name': ('django.db.models.fields.CharField', [], {'max_length': '30', 'blank': 'True'}),
            'groups': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'related_name': "u'user_set'", 'blank': 'True', 'to': u"orm['auth.Group']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'is_staff': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'is_superuser': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'last_login': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'last_name': ('django.db.models.fields.CharField', [], {'max_length': '30', 'blank': 'True'}),
            'password': ('django.db.models.fields.CharField', [], {'max_length': '128'}),
            'user_permissions': ('django.db.models.fields.related.ManyToManyField', [], {'symmetrical': 'False', 'related_name': "u'user_set'", 'blank': 'True', 'to': u"orm['auth.Permission']"}),
            'username': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '30'})
        },
        u'contenttypes.contenttype': {
            'Meta': {'ordering': "('name',)", 'unique_together': "(('app_label', 'model'),)", 'object_name': 'ContentType', 'db_table': "'django_content_type'"},
            'app_label': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'model': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '100'})
        },
        u'nice.course': {
            'Meta': {'object_name': 'Course'},
            'dept': ('django.db.models.fields.CharField', [], {'max_length': '3'}),
            'description': ('django.db.models.fields.TextField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'number': ('django.db.models.fields.CharField', [], {'max_length': '3'}),
            'professor': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'semester': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['nice.Semester']"})
        },
        u'nice.event': {
            'Meta': {'object_name': 'Event'},
            'group': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['nice.Event_Group']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'})
        },
        u'nice.event_group': {
            'Meta': {'object_name': 'Event_Group'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'section': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['nice.Section']"})
        },
        u'nice.event_group_revision': {
            'Meta': {'object_name': 'Event_Group_Revision'},
            'approved': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'end_date': ('django.db.models.fields.DateField', [], {}),
            'event_group': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['nice.Event_Group']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'modified_time': ('django.db.models.fields.DateTimeField', [], {}),
            'modified_user': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['nice.User_Profile']"}),
            'recurrence_days': ('django.db.models.fields.CharField', [], {'default': 'None', 'max_length': '300', 'null': 'True', 'blank': 'True'}),
            'recurrence_interval': ('django.db.models.fields.IntegerField', [], {'default': 'None', 'null': 'True', 'blank': 'True'}),
            'start_date': ('django.db.models.fields.DateField', [], {})
        },
        u'nice.event_revision': {
            'Meta': {'object_name': 'Event_Revision'},
            'approved': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'event': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['nice.Event']"}),
            'event_date': ('django.db.models.fields.DateTimeField', [], {}),
            'event_description': ('django.db.models.fields.TextField', [], {}),
            'event_location': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'event_title': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'event_type': ('django.db.models.fields.CharField', [], {'max_length': '2'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'modified_time': ('django.db.models.fields.DateTimeField', [], {}),
            'modified_user': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['nice.User_Profile']"})
        },
        u'nice.event_visibility': {
            'Meta': {'object_name': 'Event_Visibility'},
            'event': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['nice.Event']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_complete': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'is_hidden': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'user': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['nice.User_Profile']"})
        },
        u'nice.section': {
            'Meta': {'object_name': 'Section'},
            'course': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['nice.Course']"}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'default': "'all_students'", 'max_length': '100'})
        },
        u'nice.semester': {
            'Meta': {'object_name': 'Semester'},
            'end_date': ('django.db.models.fields.DateField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'start_date': ('django.db.models.fields.DateField', [], {})
        },
        u'nice.user_profile': {
            'Meta': {'object_name': 'User_Profile'},
            'events': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['nice.Event']", 'through': u"orm['nice.Event_Visibility']", 'symmetrical': 'False'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'lastActivityTime': ('django.db.models.fields.DateTimeField', [], {}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'netid': ('django.db.models.fields.CharField', [], {'max_length': '30'}),
            'sections': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['nice.Section']", 'through': u"orm['nice.User_Section_Table']", 'symmetrical': 'False'}),
            'user': ('django.db.models.fields.related.OneToOneField', [], {'to': u"orm['auth.User']", 'unique': 'True'})
        },
        u'nice.user_section_table': {
            'Meta': {'object_name': 'User_Section_Table'},
            'add_date': ('django.db.models.fields.DateTimeField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'section': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['nice.Section']"}),
            'user': ('django.db.models.fields.related.ForeignKey', [], {'to': u"orm['nice.User_Profile']"})
        }
    }

    complete_apps = ['nice']
