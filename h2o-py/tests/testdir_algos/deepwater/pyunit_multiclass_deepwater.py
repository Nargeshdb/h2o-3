from __future__ import print_function
import sys, os
sys.path.insert(1, os.path.join("..","..",".."))
import h2o
from tests import pyunit_utils
from h2o.estimators.deepwater import H2ODeepWaterEstimator

def deepwater_multi():
  print("Test checks if Deep Water works fine with a multiclass image dataset")

  frame = h2o.import_file(pyunit_utils.locate("bigdata/laptop/deepwater/imagenet/cat_dog_mouse.csv"))
  print(frame.head(5))
  model = H2ODeepWaterEstimator(epochs=50, rate=1e-3)
  model.train(x=[0],y=1, training_frame=frame)
  model.show()
  error = model.model_performance(train=True).mean_per_class_error()
  assert error < 0.1, "mean classification error is too high : " + str(error)

if __name__ == "__main__":
  pyunit_utils.standalone_test(deepwater_multi)
else:
  deepwater_multi()
